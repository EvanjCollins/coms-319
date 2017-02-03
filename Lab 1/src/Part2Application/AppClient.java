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

import com.sun.jndi.ldap.Connection;

public class AppClient {

	Socket serverSocket;
	String serverHostName = "localhost";
	int serverPortNumber = 4444;
	Connection server;
	public static String name;
	ServerListener sl;
	Scanner in = new Scanner(System.in);
	
	//send stream
	PrintWriter out;
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
		read.start();
		
		try {
			out = new PrintWriter(new BufferedOutputStream(serverSocket.getOutputStream()));
			//object output stream
			out1 = new ObjectOutputStream(serverSocket.getOutputStream());
			
			//send clientName to server
			out.println(clientName);
			out.flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
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
	 * 
	 */
	public void send(String text, AppClient ap, boolean admin, boolean image, int count) throws IOException{
			ObjectOutputStream out1;
			out1 = ap.out1;
			if(image == true){
				File pic1 = new File(text);
				String filepath = pic1.getAbsolutePath();
				if(pic1.isFile() == true){
					ImageIcon img = new ImageIcon(ImageIO.read(pic1));
					out1.writeObject("jpg");
					out1.writeObject(filepath);
					out1.writeObject(img);
					out1.flush();
				}
			}
			else{
				if(admin == true){
					out1.writeObject("admin to all clients");
					out1.flush();
				}
				else{
					out1.writeObject(count + ": " + text);
					out1.flush();
				}
			}
		}


		
	public static void main(String[] args) throws IOException {
		System.out.println("Enter your name:");
		Scanner in = new Scanner(System.in);
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
		String clientName = in.next();

		
		AppClient lc = new AppClient(clientName);
		
		if(clientName.equals("admin")){ //admin menu
			while(true){
				System.out.println("1. Broadcast Message to All Clients \n2. List Message History"
						+ " \n3. Delete Select Message");
				int choice = in.nextInt();
				if(choice == 1 || choice == 2 || choice == 3){
					switch (choice) {
					case 1:
						System.out.println("What's the message for the other clients?");
						String message1 = in.next();
						lc.send(message1, lc, true, false, 0);
						break;
					case 2:
						File file = new File("chat.txt");
						// append to end of file
						FileReader fr = new FileReader(file);
						BufferedReader br = new BufferedReader(fr);
						String line;
						while((line = br.readLine()) != null)
						{
						    System.out.println(line);
						}
						br.close();			
						break;
					case 3:
						System.out.println("Which line number:");
						String message = in.next();
						File file1 = new File("chat.txt");
						File file2 = new File("chattemp.txt");
						FileReader fread = new FileReader(file1);
						FileWriter fw = new FileWriter(file2);
						BufferedReader reader = new BufferedReader(fread);
						BufferedWriter bw = new BufferedWriter(fw);
						String line1;
						boolean match = false;
						int i = 1;
						while((line1 = reader.readLine()) != null){
								String history = line1.substring(3, line1.length());
								String linenum = line1.substring(0,1);
								match = (linenum.matches(message));
								if(!(match == true)){
									if(line1.contains("img")){
										bw.write(line1 + "\n");
									}
									else{
									bw.write(i + ": " + history + "\n");
									bw.flush();
									i++;
									}
								}
								else{
									continue;
								}
						}
						reader.close();
						bw.close();
						file1.delete();
						file2.renameTo(file1);
						break;
					default:
						System.out.println("client side: unknown command received:");
					}
				}
				
				else{
					System.out.println("Not An Option");
				}
			}
		}
		 
		
		else{
			while(true){
				System.out.println("1. Send a text message to the server: \n2. Send an image file to the server");
				int choice = in.nextInt();
				
				if(choice == 1 || choice == 2){
					switch (choice) {
					case 1:
						System.out.println("Enter text message");
						String text1 = in.next();
						count++;
						lc.send(text1, lc, false, false, count);
						break;
					case 2:
						System.out.println("Enter image file path");
						String pic = in.next();
						lc.send(pic, lc, false, true, count);
						break;
					default:
						System.out.println("client side: unknown command received:");
					}
				}
				else{
					System.out.println("Not An Option");
				}
				
				
			}
		}
				
		
	} // end of main method

} // end of AppClient

class ServerListener implements Runnable {
	AppClient lc;
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
