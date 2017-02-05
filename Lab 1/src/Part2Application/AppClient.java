package Part2Application;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;

/**
 * App client that connects to server
 * @author Kenneth Black, Matthew Vanderwerf
 */
public class AppClient {

	Socket serverSocket; //init server socket
	String serverHostName = "localhost"; //init local host
	int serverPortNumber = 4444; //init server port 4444
	public static String name; //init name
	ServerListener sl;//init Server Listener
	Scanner in = new Scanner(System.in);//init scanner
	
	//send stream
	PrintWriter out;
	//Object send stream
	ObjectOutputStream out1;
	
	AppClient(String clientName) {
		// connect to server
		try {
			serverSocket = new Socket(serverHostName, serverPortNumber);
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		//Spawn client listener thread
		sl = new ServerListener(this, serverSocket);
		Thread read = new Thread(sl);
		read.start(); //start thread
		
		try {
			//print writer stream
			out = new PrintWriter(new BufferedOutputStream(serverSocket.getOutputStream()));
			//object output stream
			out1 = new ObjectOutputStream(serverSocket.getOutputStream());
			//send clientName to server
			out.println(clientName);
			//flush data through
			out.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}
		


	}
	
	/*
	 * Handle message being broadcast to all clients
	 */
	public void handleMessage(String cmd, String s) throws IOException {
		switch (cmd) {
		case "print all":
			try{
				Scanner in = new Scanner(serverSocket.getInputStream());
				System.out.println("admin message:" + in.nextLine());
				in.close();
			}
			catch(IOException e){
				e.printStackTrace();
			}
			break;
		case "exit":
			System.exit(-1);
			break;
		default:
			System.out.println("client side1: unknown command received:" + cmd);
		}
	}
	
	/*
	 * Send an image or text through ObjectOutputStream to server.
	 * checks if admin is true to broadcast message or if image is true to send image to server
	 */
	public void send(String text, AppClient ap, boolean admin, boolean image, int count) throws IOException{
			ObjectOutputStream out1; //init object stream
			out1 = ap.out1; //set as AppClient object stream
			//if image is true send image filepath and img object to server 
			if(image == true){
				File pic1 = new File(text);
				String filepath = pic1.getAbsolutePath();
				if(pic1.isFile() == true){
					ImageIcon img = new ImageIcon(ImageIO.read(pic1)); //read in new file for image
					out1.writeObject("jpg"); //string for if statement on server side
					out1.writeObject(filepath); //filepath to image
					out1.writeObject(img); //image object
					out1.flush(); //flush through stream
				}
			}
			else{
				//if admin is true, send string to server telling it to broadcast message to all clients
				if(admin == true){
					out1.writeObject("admin to all clients"); //string to send to server for if statement
					out1.flush(); //flush through stream
				}
				else{
					out1.writeObject(count + ": " + text);//else send text message
					out1.flush(); //flush through stream
				}
			}
		}


	/*
	 * Main method
	 * Gets your name, send to client and try for a connection. Gets the last number of the chat history file to use as count.
	 * If your name is admin, goes to special admin menu
	 * else gives you option to send text message or image
	 */
	public static void main(String[] args) throws IOException {
		System.out.println("Enter your name:"); //Enter your name
		Scanner in = new Scanner(System.in); //init scanner
		
		//Get last line number from chate history
		File fileinit = new File("chat.txt");
		FileReader frinit = new FileReader(fileinit);
		BufferedReader brinit = new BufferedReader(frinit);
		String lineinit;
		int count = 0;
		while((lineinit = brinit.readLine()) != null)
		{
			if(!lineinit.contains("img")) count++; //check to see if image
		}
		brinit.close();
		
		String clientName = in.next(); //init clients name as next string from scanner

		
		AppClient lc = new AppClient(clientName); //new AppClient with client name to try for connection
		
		//if the clientname is admin, special admin menu for broadcasting to all clients, checking message history, and deleting old messages
		if(clientName.equals("admin")){
			while(true){
				//three options for admin
				System.out.println("1. Broadcast Message to All Clients \n2. List Message History"
						+ " \n3. Delete Select Message");
				int choice = in.nextInt(); //scan in client choice
				if(choice == 1 || choice == 2 || choice == 3){
					switch (choice) {
					case 1:
						//message to give other clients
						System.out.println("What's the message for the other clients?");
						String message1 = in.next();
						lc.send(message1, lc, true, false, 0); //send to server with admin flag as true
						break;
					case 2:
						//look up chat history
						File file = new File("chat.txt"); //get file
						FileReader fr = new FileReader(file); //load file to file reader
						BufferedReader br = new BufferedReader(fr);//load file reader to buffer reader
						String line; //init line
						//get each line of file and print it out
						while((line = br.readLine()) != null)
						{
						    System.out.println(line);
						}
						br.close();			
						break;
					case 3:
						//delete given line number
						System.out.println("Which line number:");
						String message = in.next();//scan in line 
						File file1 = new File("chat.txt");//chat history
						File file2 = new File("chattemp.txt");//temp chat history to write to
						FileReader fread = new FileReader(file1); //load file to file reader
						FileWriter fw = new FileWriter(file2); //load temp file to file writer
						BufferedReader reader = new BufferedReader(fread); //load file reader to buffered reader
						BufferedWriter bw = new BufferedWriter(fw); //load file writer to buffered writer
						String line1; //init first line
						boolean match = false; //init check for match
						int i = 1; //new line count to skip deleted line
						while((line1 = reader.readLine()) != null){
								String history = line1.substring(3, line1.length()); //message without line count
								String linenum = line1.substring(0,1); //line number
								match = (linenum.matches(message)); //if line number = given line
								if(!(match == true)){
									if(line1.contains("img")){ //if contains img, write without new line number
										bw.write(line1 + "\n");
									}
									else{
									bw.write(i + ": " + history + "\n"); //else write message with new line number
									bw.flush(); //flush through stream
									i++; //iterate line number
									}
								}
								else{
									continue;
								}
						}
						reader.close(); //close reader
						bw.close(); //close writer
						file1.delete(); //delete old chat history
						file2.renameTo(file1); //rename temp history as chat.txt as new chat history
						break;
					default:
						System.out.println("client side: unknown command received:");
					}
				}
				
				else{
					System.out.println("Not An Option"); //user did not give valid option
				}
			}
		}
		 
		
		else{
			while(true){
				//send text message or image file to server
				System.out.println("1. Send a text message to the server: \n2. Send an image file to the server:");
				int choice = in.nextInt(); //scan in choice
				if(choice == 1 || choice == 2){
					switch (choice) {
					case 1:
						//get text message to send
						System.out.println("Enter text message");
						String text1 = in.next(); //scan in text
						count++; //iter line number
						lc.send(text1, lc, false, false, count); //send to server with count number
						break;
					case 2:
						//get image file path to send
						System.out.println("Enter image file path"); 
						String pic = in.next();//scan in image
						lc.send(pic, lc, false, true, count); //send to server with image flag as true
						break;
					default:
						System.out.println("client side: unknown command received:"); //unknown command
					}
				}
				else{
					System.out.println("Not An Option"); //user did not give valid option
				}
				
				
			}
		}
				
		
	} // end of main method

} // end of AppClient

/*
 * Server listener to grab broadcast message from server and send to client
 */
class ServerListener implements Runnable {
	AppClient lc; //init Appclient
	Scanner in; // this is used to read which is a blocking call

	ServerListener(AppClient lc, Socket s) {
		try {
			this.lc = lc;
			in = new Scanner(new BufferedInputStream(s.getInputStream()));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void run() {
		while (true) { // run forever
			/**try {
				
				String cmd = in.next();
				String s = in.nextLine();
				lc.handleMessage(cmd, s);
				**/
				String s = in.nextLine(); //blocking call
				System.out.println(s); 
			/**} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}**/
		}

	}

}
