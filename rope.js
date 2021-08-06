class rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
        fill("black")
		var l1X=pointA.x
		var l1Y=pointA.y

		var l2X=pointB.x+this.offsetX
		var l2Y=pointB.y+this.offsetY

		line(l1X,l1Y,l2X,l2Y);
	}

}
