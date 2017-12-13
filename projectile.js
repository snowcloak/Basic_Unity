#pragma strict

var boom : GameObject;
var enemy: GameObject;

function Start () {
	// projectiles will only live for three seconds (keeps it from eating up all your memory)
	Destroy (gameObject, 2);
	//find enemies
	enemy = GameObject.FindWithTag("Enemy");
}

function Update () {

}

// the OnTriggerEnter function just asks if this Trigger object (trigger is checked on the Box Collider
// in the Unity editor for the projectile prefab) has "entered" another object (2nd object need not be a trigger)
function OnTriggerEnter (other : Collider) {
	// if so, destroy the OTHER game object in question
	Destroy(enemy.gameObject);
	// ah screw it, destroy this one too. bullets can't travel thru enemies they kill!
	Destroy(this.gameObject);
	
	// create a "boom" prefab, which as you can see is a particle system that looks like an explosion
	// create this at the position of the projectile entering the obstacle object
	Instantiate(boom, transform.position, transform.rotation);
}