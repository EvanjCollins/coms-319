package Part2Application;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Scanner;

import javax.swing.ImageIcon;

public class AppServer implements Runnable{

	Socket csocket;
	int clientNum = 0;
//	ArrayList<AppClientHandler> clientList;
	protected int          serverPort   = 4444;
    protected ServerSocket serverSocket = null;
    protected boolean      isStopped    = false;
	protected Thread       t= null;
	AppServer(int port) throws IOException{
//		clientList = new ArrayList<AppClientHandler>();
//        serverSocket = new ServerSocket(port);
//
//        Thread accept = new Thread() {
//            public void run(){
//                while(true){
//                    try{
//                    	clientNum++;
//                        Socket s = serverSocket.accept();
//                        clientList.add(new AppClientHandler(s,clientNum++));
//                    }
//                    catch(IOException e){ e.printStackTrace(); }
//                }
//            }
//        };
//        
//        accept.setDaemon(true);
//        accept.start();
		this.serverPort = port;
	}
	/**
	 * Main method to start new multithreaded server
	 * @param args
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException {
		AppServer server = new AppServer(4444);
		new Thread(server).start();
		try {
		    Thread.sleep(20 * 1000);
		} catch (InterruptedException e) {
		    e.printStackTrace();
		}
		
	}
	  public void run(){
	        synchronized(this){
	            this.t = Thread.currentThread();
	        }
	        openServerSocket();
	        while(! isStopped()){
	            Socket clientSocket = null;
	            
	            try {
	            	System.out.println("Waiting for client " + (clientNum + 1)
							+ " to connect!");
	                clientSocket = this.serverSocket.accept();
	            } catch (IOException e) {
	                if(isStopped()) {
	                    System.out.println("Server Stopped.") ;
	                    return;
	                }
	                throw new RuntimeException(
	                    "Error accepting client connection", e);
	            }
	            System.out.println("Server got connected to a client "
						+ ++clientNum);
	            Thread t = new Thread(new AppClientHandler(clientSocket, clientNum));
	            t.start();
	        }
	        System.out.println("Server Stopped.") ;
	    }


	 private synchronized boolean isStopped() {
		 return this.isStopped;
	 }	

	 public synchronized void stop() {
		 isStopped = true;
		 	try {
		 			this.serverSocket.close();
		 		} catch (IOException e) {
		 			throw new RuntimeException("Error closing server", e);
		 		}
	 }

	 private void openServerSocket() {
		 try {
			 this.serverSocket = new ServerSocket(this.serverPort);
		 } catch (IOException e) {
			 throw new RuntimeException("Cannot open port 4444", e);
		 }
	 }
	 
	
}

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
		ObjectInputStream in1;
	//	
		try {
			//GET SOCKET IN/OUT STREAMS
			in = new Scanner(new BufferedInputStream(s.getInputStream()));
			out = new PrintWriter(new BufferedOutputStream(s.getOutputStream()));
			in1 = new ObjectInputStream(s.getInputStream());

			
			//if(in.hasNext()){ 
			System.out.println("Server Thread (" + num + ")  Listening"); //debugging line
			String text = in.nextLine(); //blocking call waits for input from client (receives client name)
			ImageIcon image; //image object
			clientName = text; //clientName
			text = null;
			String filepath = null;
			System.out.println(clientName + " Connected!"); //debugging line
			//KEEP LISTENING AND RESPONDING TO CLIENT REQUESTS
			while(true)
				//check first for text or image
				try{
					while((text = (String) in1.readObject()) != null){
					if(text.contains("admin to all clients")){
						 for (int i = 0, j = num; i <= j; i++) {
							 Socket sclient = this.s; //get socket
							 try{
								 out = new PrintWriter(new BufferedOutputStream(sclient.getOutputStream()));
							 }
							 catch(IOException e){
								 System.err.println("Caught io exception" + e.getMessage());
							 }
							 out.println("print all" + " penis");
							 out.flush();
							 out.close();
						 }
					}
					if(text.contains("jpg")){
						filepath = (String) in1.readObject();
						image = (ImageIcon) in1.readObject();
						handleImage(image,filepath,clientName);
						image = null;
						text = null;
					}
					else{
						//blocking call waits for additional input
						handleText(text);
					}
					}
			
			
			} catch (IOException e) {
				System.err.println("Caught IOException: " + e.getMessage());
			} catch (ClassCastException e) {
				System.err.println("Caught ClassCastException: " + e.getMessage());
				continue;
			} catch (ClassNotFoundException e) {
				continue;
			}
			
		
		// This handling code dies after doing all the printing
		} catch (IOException e1) {
			System.err.println("Caught IO Exception:" + e1.getMessage());
		}finally{
			
		}
}

	
	//handle text message
	void handleText(String s) throws IOException {
		System.out.println("Server Received: " + s);
		//write message to text file
		File file = new File("chat.txt");
		// append to end of file
		FileWriter fw = new FileWriter(file, true);
		BufferedWriter bw = new BufferedWriter(fw);
		bw.write(s + "\n");
		bw.close();
		
	}
	
	//handle image
	void handleImage(ImageIcon img, String text, String clientname) throws IOException {
		File afile =new File(text);
		String filename = clientname + "_" + (System.currentTimeMillis()/(10000)) ;
 	    File bfile =new File("E:/workspace/Coms319/Lab 1/images/" + filename);
		FileInputStream inStream = new FileInputStream(afile);
		FileOutputStream outStream = new FileOutputStream(bfile);
	    int length;
	    byte[] buffer = new byte[1024];

	    //copy the file content in bytes
	    while ((length = inStream.read(buffer)) > 0){
	    	 
	    	outStream.write(buffer, 0, length);

	    }
	    
	    inStream.close();
	    outStream.close();
	    handleText("img " + filename);
	}
	
//	//Admin request to send message to all clients
//	 void broadcastMessage(String message) {
//
//		 for (int i = 0, j = num; i <= j; i++) {
//			 Socket socket = s; //get socket
//			 PrintWriter out; //get writer
//			 try {
//				 out = new PrintWriter(new BufferedWriter(
//        		 new OutputStreamWriter(socket.getOutputStream())), true); //initialize writer
//			 } catch (IOException e) {
//				 System.out.println("da fuck");
//				 e.printStackTrace();
//			 }
//			 
//			 out.println("print all" + message);
//			 out.flush();
//			 out.close();
//		 }
//	 }
}