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
import postgresql from "../assets/img/icons/postgresql.svg";
import mysql from "../assets/img/icons/mysql.svg";
import dynamodb from "../assets/img/icons/dynamodb.svg";
import docker from "../assets/img/icons/docker.svg";
import aws from "../assets/img/icons/aws.svg";

// Note: The following icons still need to be added to src/assets/img/icons/:
// - kubernetes.svg (Kubernetes logo)
// - jenkins.svg (Jenkins logo)
// - vscode.svg (VS Code logo)
// - jira.svg (Jira logo)
// - php.svg (PHP logo)
// - git.svg (Git logo - different from GitHub)
// - grafana.svg (Grafana logo)
// - r.svg (R logo)
// - agile.svg (Agile/Scrum logo)

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
  // New icons - using actual icon files
  postgresql,
  mysql,
  dynamodb,
  docker,
  aws,
  // Temporary fallbacks until icon files are added
  kubernetes: linux, // Will use Kubernetes icon when added
  jenkins: javascript, // Will use Jenkins icon when added
  vscode: javascript, // Will use VS Code icon when added
  jira: javascript, // Will use Jira icon when added
  php: javascript, // Will use PHP icon when added
  git: github, // Will use Git icon when added
  grafana: tableau, // Will use Grafana icon when added
  r: python, // Will use R icon when added
  agile: javascript, // Will use Agile icon when added
};

export default icons;
