using UnityEngine;
using System.Collections;

public class Rotator : MonoBehaviour {

	public float speed_X;
	public float speed_Y;
	public float speed_Z;

	// Update is called once per frame
	void Update () {
	
		//rotates along the X-axis
		transform.Rotate (new Vector3 (speed_X, speed_Y, speed_Z) * Time.deltaTime);

	}
}
