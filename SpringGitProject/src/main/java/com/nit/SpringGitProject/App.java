package com.nit.SpringGitProject;

public class App 
{
	public int sum(int x,int y) {
		return x+y;
	}
    public static void main( String[] args )
    {
    	App app=new App();
        System.out.println("1 "+ app.sum(10, 20) );
    }
}
