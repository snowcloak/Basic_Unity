﻿#pragma strict

function Update () {
	if (Input.GetKeyDown ("return"))
		Application.LoadLevel("scene1");
}