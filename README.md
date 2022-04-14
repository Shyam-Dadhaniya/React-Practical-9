# Practical-9
## User List App

## Hosted on AWS : http://user-management-react.s3-website-us-west-2.amazonaws.com/signup


### 1. What is AWS S3?
Amazon Simple Storage Service (AWS S3) is highly available, scalable, secure, durable cloud storage where we can store millions of data with very minimal rates.


### 2. Prerequisites
Running React JS app <br/>
AWS Account with Administrator access <br/>

### 3. Setup AWS S3
### Step 1 : Open AWS Account
### Step 2 : Click on Create Bucket
![1](https://user-images.githubusercontent.com/97106864/163357553-8f4d538b-9670-4e63-b259-5660cef36fed.png)
### Step 3 : Enter Bucket name (Eg: deploy-react-app), uncheck all public access, check I acknowledge, and click on Create Bucket
![2](https://user-images.githubusercontent.com/97106864/163357818-e2e78fdf-0e51-4360-8e66-01619bc3eb42.png)
### Step 4: Select created bucket and click on the permissions tab
### Step 5: Click on Edit Bucket Policy and paste the following policy in policy editor and replace your bucket name and click on save changes.
```JSON
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<bucket-name>/*"
            ]
        }
    ]
}
```
![3](https://user-images.githubusercontent.com/97106864/163358362-cc3c1927-ee35-46e2-bd87-9a96724aec35.png)
### Step 6: Click on the Properties tab and then click on the edit button of Static Website hosting
![4](https://user-images.githubusercontent.com/97106864/163359126-05de47c3-3885-49d7-8b58-e358837eb41f.png)

### Step 7: Enable static website hosting, enter index.html in Index document and Error document and click on Save changes
![5](https://user-images.githubusercontent.com/97106864/163359650-5ee8887f-be1e-47a0-a7bc-4115956a9d0e.png)

### Step 8: Now go to github repositories Setting=>security->Secrets->Actions
![6](https://user-images.githubusercontent.com/97106864/163361006-dca033a2-2ea0-44ae-b951-cd19524d80ed.png)

### Step 9: Click on new repository secret
![7](https://user-images.githubusercontent.com/97106864/163361243-fae92178-ea75-4369-ab0f-c84d18bca959.png)

### Step 10: Now go to Action tab
![8](https://user-images.githubusercontent.com/97106864/163362346-0e54521b-6e2e-4e07-b76e-75e8e8060e8e.png)

### Step 11: Add your workflow accordingly and commit it.
![9](https://user-images.githubusercontent.com/97106864/163363084-ffde9c1e-2bb3-47c1-8dcd-9994ea40547a.png)

That's all website is live!! :boom: :thumbsup:
