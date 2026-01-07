import javascript from "../assets/img/icons/javascript.svg";
import python from "../assets/img/icons/python.svg";
import cpp from "../assets/img/icons/cpp.svg";
import typescript from "../assets/img/icons/typescript.svg";
import c from "../assets/img/icons/c.svg";
import java from "../assets/img/icons/java.svg";
import go from "../assets/img/icons/go.svg";
import mongodb from "../assets/img/icons/mongodb.svg";
import express from "../assets/img/icons/express.svg";
import react from "../assets/img/icons/react.svg";
import nodejs from "../assets/img/icons/nodejs.svg";
import flask from "../assets/img/icons/flask.svg";
import css from "../assets/img/icons/css.svg";
import framermotion from "../assets/img/icons/framermotion.svg";
import angular from "../assets/img/icons/angular.svg";
import tensorflow from "../assets/img/icons/tensorflow.svg";
import sklearn from "../assets/img/icons/sklearn.svg";
import d3 from "../assets/img/icons/d3.svg";
import sql from "../assets/img/icons/sql.svg";
import matplotlib from "../assets/img/icons/matplotlib.svg";
import pyspark from "../assets/img/icons/pyspark.svg";
import hive from "../assets/img/icons/hive.svg";
import powerbi from "../assets/img/icons/powerbi.svg";
import windows from "../assets/img/icons/windows.svg";
import macos from "../assets/img/icons/macos.svg";
import ms_office from "../assets/img/icons/ms_office.svg";
import labview from "../assets/img/icons/labview.jpg";
import tableau from "../assets/img/icons/tableau.svg";
import unity from "../assets/img/icons/unity.svg";
import kali from "../assets/img/icons/kali.svg";
import linux from "../assets/img/icons/linux.svg";
import english from "../assets/img/icons/english.svg";
import hindi from "../assets/img/icons/hindi.svg";
import japanese from "../assets/img/icons/japanese.svg";
import french from "../assets/img/icons/french.svg";
import arabic from "../assets/img/icons/arabic.png";
import github from "../assets/img/icons/github.svg";
import dsa from "../assets/img/icons/dsa.svg";
import html from "../assets/img/icons/html.svg";
import django from "../assets/img/icons/django.svg";
// PostgreSQL SVG has style tag issues - using fallback for now
// import postgresql from "../assets/img/icons/postgresql.svg";
import mysql from "../assets/img/icons/mysql.svg";
import dynamodb from "../assets/img/icons/dynamodb.svg";
import docker from "../assets/img/icons/docker.svg";
import aws from "../assets/img/icons/aws.svg";
// Kubernetes SVG has style tag issues - using fallback for now
// import kubernetes from "../assets/img/icons/kubernetes.svg";
import jenkins from "../assets/img/icons/jenkins.svg";
import vscode from "../assets/img/icons/vscode.svg";
import jira from "../assets/img/icons/jira.svg";
import php from "../assets/img/icons/php.svg";
// Grafana SVG has style tag issues - using fallback for now
// import grafana from "../assets/img/icons/grafana.svg";
import r from "../assets/img/icons/r.svg";
import agile from "../assets/img/icons/agile.svg";

const icons = {
  javascript,
  python,
  cpp,
  typescript,
  c,
  java,
  go,
  mongodb,
  express,
  react,
  nodejs,
  flask,
  css,
  framermotion,
  angular,
  tensorflow,
  sklearn,
  d3,
  sql,
  matplotlib,
  pyspark,
  hive,
  powerbi,
  windows,
  macos,
  ms_office,
  labview,
  tableau,
  unity,
  kali,
  linux,
  english,
  hindi,
  japanese,
  french,
  arabic,
  github,
  dsa,
  html,
  django,
  // Using actual icon files
  postgresql: sql, // PostgreSQL SVG has style tag issues - using SQL icon as fallback
  mysql,
  dynamodb,
  docker,
  aws,
  kubernetes: linux, // Kubernetes SVG has style tag issues - using Linux icon as fallback
  jenkins,
  vscode,
  jira,
  php,
  git: github, // Git icon not added yet, using GitHub as fallback
  grafana: tableau, // Grafana SVG has style tag issues - using Tableau icon as fallback
  r,
  agile
};

export default icons;
