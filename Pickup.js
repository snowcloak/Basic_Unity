#pragma strict

function OnTriggerEnter(other : Collider) 
	{
		if (other.gameObject.tag == "PickUp")
		    {
			other.gameObject.SetActive(false);
			gameObject.GetComponent(Shooter).enabled = true;
		}
		}