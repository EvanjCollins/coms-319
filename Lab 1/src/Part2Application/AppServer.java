package Part2Application;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class AppServer {

	public static void main(String[] args) throws IOException {

		ServerSocket serverSocket = null;  // 1. serversocket
		int clientNum = 0; // keeps track of how many clients were created

		// 1. CREATE A NEW SERVERSOCKET
		try {
			serverSocket = new ServerSocket(4444); // provide MYSERVICE at port 
													// 4444
			System.out.println(serverSocket);
		} catch (IOException e) {
			System.out.println("Could not listen on port: 4444");
			System.exit(-1);
		}

		// 2. LOOP FOREVER - SERVER IS ALWAYS WAITING TO PROVIDE SERVICE!
		while (true) { // 3.
			Socket clientSocket = null;
			try {

				// 2.1 WAIT FOR CLIENT TO TRY TO CONNECT TO SERVER
				System.out.println("Waiting for client " + (clientNum + 1)
						+ " to connect!");
				clientSocket = serverSocket.accept(); //blocking call waits for client to connect

				// 2.2 SPAWN A THREAD TO HANDLE CLIENT REQUEST
				System.out.println("Server got connected to a client"
						+ ++clientNum);
				Thread t = new Thread(new AppClientHandler(clientSocket, clientNum));
				t.start();

			} catch (IOException e) {
				System.out.println("Accept failed: 4444");
				System.exit(-1);
			}

			// 2.3 GO BACK TO WAITING FOR OTHER CLIENTS
			// (While the thread that was created handles the connected client's
			// request)

		} // end while loop

	} // end of main method

} // end of class MyServer

class AppClientHandler implements Runnable {
	Socket s; // this is socket on the server side that connects to the CLIENT
	int num; // keeps track of its number just for identifying purposes
	String clientName; 
	
	
	AppClientHandler(Socket s, int n) {
		this.s = s;
		num = n;
	}
	
	// This is the client handling code
	// This keeps running handling client requests 
	// after initially sending some stuff to the client
	public void run() { 
		Scanner in;
		PrintWriter out;
	//	
		try {
			// 1. GET SOCKET IN/OUT STREAMS
			in = new Scanner(new BufferedInputStream(s.getInputStream())); 
			out = new PrintWriter(new BufferedOutputStream(s.getOutputStream()));
			
			// 3. KEEP LISTENING AND RESPONDING TO CLIENT REQUESTS
			
			//if(in.hasNext()){ 
			System.out.println("Server Thread (" + num + ")  Listening"); //debugging line
			String text = in.nextLine(); //blocking call waits for input from client (receives client name)
			clientName = text;
			System.out.println(clientName + " Connected!"); //debugging line
			//System.out.println(text); //debugging line
			//out.println(text);
			//out.flush();
			//}
			
			while(true){
				//check first for text or image
					//todo
				
				text = in.nextLine(); //blocking call waits for additional input
				handleRequest(text);
			}
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		// This handling code dies after doing all the printing
	} // end of method run()
	
	void handleRequest(String s) throws IOException {

		System.out.println("Server Received: " + s);
		//write message to text file
		File file = new File("chat.txt");
		// append to end of file
		FileWriter fw = new FileWriter(file, true);
		BufferedWriter bw = new BufferedWriter(fw);
		bw.write(s + "\n");
		bw.close();
	}
} // end of class ClientHandler
