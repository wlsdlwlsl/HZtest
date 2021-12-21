package com.dogether.domain;

public class OrderVO {
	private String orderID;
	private String memberID;
	private String productID;
	private String orderDate;
	private char buyingConfrimYN;
	private char returnYN;
	private int returnStatus;
	
	public String getOrderID() {
		return orderID;
	}
	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}
	public String getMemberID() {
		return memberID;
	}
	public void setMemberID(String memberID) {
		this.memberID = memberID;
	}
	public String getProductID() {
		return productID;
	}
	public void setProductID(String productID) {
		this.productID = productID;
	}
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
	public char getBuyingConfrimYN() {
		return buyingConfrimYN;
	}
	public void setBuyingConfrimYN(char buyingConfrimYN) {
		this.buyingConfrimYN = buyingConfrimYN;
	}
	public char getReturnYN() {
		return returnYN;
	}
	public void setReturnYN(char returnYN) {
		this.returnYN = returnYN;
	}
	public int getReturnStatus() {
		return returnStatus;
	}
	public void setReturnStatus(int returnStatus) {
		this.returnStatus = returnStatus;
	}
	
	
}
