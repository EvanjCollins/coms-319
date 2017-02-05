package Part2Application;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

import javax.swing.ImageIcon;

/**
 * Multithreaded server that AppClient connects to. Uses port 4444. Clients are handled by AppClientHandler in seperate threads.
 * @author Kenneth Black, Matthew Vanderwerf
 *
 */
public class AppServer implements Runnable{

	Socket csocket; //socket for client
	int clientNum = 0; //number of client
//	ArrayList<AppClientHandler> clientList;
	protected int          serverPort   = 4444; //port number to use
    protected ServerSocket serverSocket = null; //init serverSocket
    protected boolean      isStopped    = false; //is thread stopped?
	protected Thread       t= null; //init thread
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
	
	/*
	 * Main method to start new multithreaded server
	 * @param args
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException {
		//Start new Appserver at port 444
		AppServer server = new AppServer(4444);
		new Thread(server).start(); //start thread
		try {
		    Thread.sleep(20 * 1000);
		} catch (InterruptedException e) {
		    e.printStackTrace();
		}
		
	}
	
	//Synchronized run method that starts client thread that is handed by AppClientHandler
	public void run(){
	        synchronized(this){
	            this.t = Thread.currentThread();
	        }
	        //open server port
	        openServerSocket();
	        while(! isStopped()){
	            Socket clientSocket = null;//init socket
	            
	            //try client connection
	            try {
	            	System.out.println("Waiting for client " + (clientNum + 1)
							+ " to connect!");
	                clientSocket = this.serverSocket.accept();//connect socket to client
	            } catch (IOException e) {
	            	//stop server if socket doesn't pass
	                if(isStopped()) {
	                    System.out.println("Server Stopped.") ;
	                    return;
	                }
	                throw new RuntimeException(
	                    "Error accepting client connection", e);
	            }
	            //Print out message saying client is connected
	            System.out.println("Server got connected to a client "
						+ ++clientNum);
	            //Thread for new client
	            Thread t = new Thread(new AppClientHandler(clientSocket, clientNum));
	            t.start();//start thread
	        }
	        //server stops
	        System.out.println("Server Stopped.") ;
	 }

	 //boolean to check if thread is stopped
	 private synchronized boolean isStopped() {
		 return this.isStopped;
	 }	
	 
	 //synchronized method to stop server
	 public synchronized void stop() {
		 isStopped = true;
		 	try {
		 			this.serverSocket.close();
		 		} catch (IOException e) {
		 			throw new RuntimeException("Error closing server", e);
		 		}
	 }
	 
	 //synchronized method to open socket at server port
	 private void openServerSocket() {
		 try {
			 this.serverSocket = new ServerSocket(this.serverPort);
		 } catch (IOException e) {
			 throw new RuntimeException("Cannot open port 4444", e);
		 }
	 }
	 
	
}
/**
 * Client Handler class that initialized the client and 
 *
 */
class AppClientHandler implements Runnable {
	Socket s; // this is socket on the server side that connects to the CLIENT
	int num; // keeps track of its number just for identifying purposes
	String clientName; 
	
	//Grab current socket and client number
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
			text = null; //init text
			String filepath = null; //init filepath
			System.out.println(clientName + " Connected!"); //debugging line
			//KEEP LISTENING AND RESPONDING TO CLIENT REQUESTS
			while(true)
				//check first for text or image
				try{
					//check if object is a string that is not null
					while((text = (String) in1.readObject()) != null){
					//attempt to broadcast to clients	
					if(text.contains("admin to all clients")){ 
						 for (int i = 0, j = num; i <= j; i++) {
							 Socket sclient = s; //get socket, don't know how to switch client socket!!
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
					//if object is an image
					if(text.contains("jpg")){
						//file path of image
						filepath = (String) in1.readObject();
						//Image Icon image
						image = (ImageIcon) in1.readObject();
						//blocking call to handle image
						handleImage(image,filepath,clientName);
						//reset image
						image = null;
						//reset text
						text = null;
					}
					//else send text
					else{
						//blocking call waits for additional input
						handleText(text);
					}
					}
			
			
			} catch (IOException e) {
				//catch IOException
				System.err.println("Caught IOException: " + e.getMessage());
			} catch (ClassCastException e) {
				//Catch class casting exception for image coming as string
				System.err.println("Caught ClassCastException: " + e.getMessage());
				continue;
			} catch (ClassNotFoundException e) {
				//just continue
				continue;
			}
			
		
		// This handling code dies after doing all the printing
		} catch (IOException e1) {
			System.err.println("Caught IO Exception:" + e1.getMessage());
		}finally{
			
		}
}

	
	/*
	 * Handle text message
	 * Place into chat history .txt file using buffered writer and close writer
	 */
	void handleText(String s) throws IOException {
		System.out.println("Server Received: " + s);
		//write message to text file
		File file = new File("chat.txt");
		//load file in file writer
		FileWriter fw = new FileWriter(file, true);
		//load file into buffered writer
		BufferedWriter bw = new BufferedWriter(fw);
		//write to file with buffered writer
		bw.write(s + "\n");
		//close buffered writer
		bw.close();
		
	}
	
	/*
	 * Handle image
	 * take ImageIcon Object from client and place into new directory under images folder
	 * File is saved with the file name: <clientname> + <System time>
	 */
	void handleImage(ImageIcon img, String text, String clientname) throws IOException {
		//original .jpg file
		File afile =new File(text);
		//get file name:  <clientname> + <System time>
		String filename = clientname + "_" + (System.currentTimeMillis()/(10000)) ;
 	    //new directory to send file to
		File bfile =new File("E:/workspace/Coms319/Lab 1/images/" + filename);
		//byte stream for original file
		FileInputStream inStream = new FileInputStream(afile);
		//byte stream to new file
		FileOutputStream outStream = new FileOutputStream(bfile);
	    //length of bytes
		int length;
		//buffer
	    byte[] buffer = new byte[1024];
	    //copy the file content in bytes
	    while ((length = inStream.read(buffer)) > 0){
	    	//write to new file 
	    	outStream.write(buffer, 0, length);

	    }
	    //close inStream of original file
	    inStream.close();
	    //close outStream to new file
	    outStream.close();
	    //send image filename to chat history and for server to confirm message handling
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