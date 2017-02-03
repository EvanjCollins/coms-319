package Part2Application;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;

import com.sun.jndi.ldap.Connection;
import com.sun.org.apache.xml.internal.security.exceptions.Base64DecodingException;
import com.sun.org.apache.xml.internal.security.utils.Base64;

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
	
	
	public void sendText(String text, AppClient ap, boolean admin, int count) throws IOException{
		PrintWriter out;
		out = ap.out;
		if(admin == true){
			out.println("admin to all clients:" + text);
			out.flush();
		}
		else{
			out.println(count + ": " + text);
			out.flush();
		}
	}

	public void sendImage(String pic, AppClient ap) throws IOException{
		if(pic != null){
			
			ObjectOutputStream out1;
			out1 = ap.out1;
			File pic1 = new File(pic);
			
			if(pic1.isFile() == true){
				ImageIcon img = new ImageIcon(ImageIO.read(pic1));
				out1.writeObject(img);
				out1.flush();
			}
		}
		else{
			System.out.println("invalid file");
		}
	}

	public static void main(String[] args) throws IOException {
		System.out.println("Enter your name:");
		Scanner in = new Scanner(System.in);
		int count = 0;
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
						lc.sendText(message1, lc, true, 0);
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
						System.out.println("Which line number would you like to delete:");
						String message = in.next();
						String charset = "UTF-8";
						File file1 = new File("chat.txt");
						File temp = File.createTempFile("file", ".txt", file1.getParentFile());
						BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file1), charset));
						BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(temp), charset));
						String line1;
						while((line1 = reader.readLine()) != null){
							if(line1.contains(message)){
								line1 = line1.replace(message, "");
								bw.write(line1);
							}
						}
						file1.delete();
						temp.renameTo(file1);
						reader.close();
						bw.close();
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
				System.out.println("1. Send a text message to the server: \n2. Send an image file to the server \n3. Logout");
				int choice = in.nextInt();
				
				if(choice == 1 || choice == 2 || choice == 3){
					switch (choice) {
					case 1:
						System.out.println("Enter text message");
						String text1 = in.next();
						count++;
						lc.sendText(text1, lc, false,count);
						break;
					case 2:
						System.out.println("Enter image file path");
						String pic = in.next();
						lc.sendImage(pic, lc);
						break;
					case 3:
						lc.sendText("logout", lc, false,0);
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
			try {
				String cmd = in.next();
				String s = in.nextLine();
				lc.handleMessage(cmd, s);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

}
