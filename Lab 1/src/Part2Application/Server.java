//package Part2Application;
//
//import java.net.*;
//import java.util.ArrayList;
//import java.util.Random;
//import java.util.Scanner;
//
////import ServerClientExamples.ClientHandler;
//
//import java.io.*;
//
//public class Server implements Runnable
//{
//	
//	private ServerSocket serverSocket = null;
//	private Thread mainThread = null;
//	private File file = new File("chat.txt");
//	private PrintWriter writer;
//	private ServerGUI frame;
//	private Thread guiMessageThread;
//
//	public Server(int port)
//	{
//		//TODO Binding and starting server
//		try
//		{
//			System.out.println("Binding to port " + port + ", please wait  ...");
//			serverSocket = new ServerSocket(port);
//			System.out.println("Server started: " + serverSocket);
//			start();
//		} catch (IOException ioe)
//		{
//			System.out.println("Can not bind to port " + port + ": " + ioe.getMessage());
//		}
//	}
//
//	public void run()
//	{
//		// 1. CREATE A NEW SERVERSOCKET
//				try {
//					serverSocket = new ServerSocket(4444); // provide MYSERVICE at port
//															// 4444
//					System.out.println(serverSocket);
//				} catch (IOException e) {
//					System.out.println("Could not listen on port: 4444");
//					System.exit(-1);
//				}
//
////				// 2. LOOP FOREVER - SERVER IS ALWAYS WAITING TO PROVIDE SERVICE!
////				while (true) {
////					Socket clientSocket = null;
////					try {
////
////						// 2.1 WAIT FOR CLIENT TO TRY TO CONNECT TO SERVER
////						System.out.println("Waiting for client " + (clientNum + 1)
////								+ " to connect!");
////						clientSocket = serverSocket.accept();
////
////						// 2.2 SPAWN A THREAD TO HANDLE CLIENT REQUEST
////						System.out.println("Server got connected to a client"
////								+ ++clientNum);
////						Thread t = new Thread(new ClientHandler(clientSocket, clientNum));
////						t.start();
////
////					} catch (IOException e) {
////						System.out.println("Accept failed: 4444");
////						System.exit(-1);
////					}
////
////					// 2.3 GO BACK TO WAITING FOR OTHER CLIENTS
////					// (While the thread that was created handles the connected client's
////					// request)
////
////				} // end while loop
////
////		
//	}
//
//	public void start()
//	{
//		frame = new ServerGUI();
//		frame.setVisible(true);
//		//TODO launch a thread to read for new messages by the server
//	
//	}
//	
//	public void stop()
//	{
//		//TODO
//		
//	}
//
//	private int findClient(int ID)
//	{
//		//TODO Find Client
//		
//
//		return -1;
//	}
//
//	public synchronized void handle(String input)
//	{
//		// TODO new message, send to clients and then write it to history
//	
//		//TODO update own gui
//		
//	}
//
//	public synchronized void remove(int ID)
//	{
//		//TODO get the serverthread, remove it from the array and then terminate it
//		
//	}
//
//	private void addThread(Socket socket)
//	{
//		//TODO add new client
//		
//	}
//
//	public static void main(String args[])
//	{
//		Server server = null;
//		server = new Server(1222);
//	}
//}