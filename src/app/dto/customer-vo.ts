export class CustomerVo {
    id?:number
    username:string="";
    password:string="";
    email:string="";
    address:string="";
    education:string="";
    
    public  getUsername():string {
		return this.username;
	}
	public  setUsername( username:string):void {
		this.username = username;
	}
	public  getPassword():string {
		return this.password;
	}
	public  setPassword( password:string):void {
		this.password = password;
	}
	public  getEmail():string {
		return this.email;
	}
	public  setEmail( email:string):void {
		this.email = email;
	}
	public  getAddress():string {
		return this.address;
	}
	public  setAddress( address:string):void {
		this.address = address;
	}
	
	public  getEducation():string {
		return this.education;
	}
	public  setEducation( education:string):void {
		this.education = education;
	}
	
   
}
