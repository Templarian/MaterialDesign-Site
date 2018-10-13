### Get Icon by Id

> **Warning:** Do not make multiple requests.
>
> **Note:**  No Cache

```text
GET api/icon/{iconId}
```

```json
{  
  "id":"E76EC23F-AB71-49B3-9173-841544527A20",
  "package_id":"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",
  "name":"account",
  "description":"Account icon",
  "data":"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",
  "user":{  
    "name":"Google",
    "twitter":"Google"
  },
  "aliases":[  
    {  
      "id":"e376cdb4-b783-11e6-bd37-842b2b6cfe1b",
      "name":"person"
    },
    {  
      "id":"66161c40-b1f1-11e7-bf5c-94188269ec50",
      "name":"user"
    }
  ],
  "tags":[  
    {  
      "id":"fe9fa4d9-c43f-11e7-bf5c-94188269ec50",
      "name":"Account \/ User",
      "url":"user"
    },
    {  
      "id":"8399c00e-c441-11e7-bf5c-94188269ec50",
      "name":"Home Automation",
      "url":"home-automation"
    }
  ],
  "fonts":[  
    {  
      "id":"9424792A-15B0-4250-B5AE-7874C8105984",
      "codepoint":"F004",
      "version":{  
        "id":"95C44106-BD73-11E5-A4E9-842B2B6CFE1B",
        "major":"1",
        "minor":"5",
        "patch":"54"
      },
      "font":{  
        "id":"D051337E-BC7E-11E5-A4E9-842B2B6CFE1B",
        "name":"Material Design Icons",
        "description":"The complete material design icon pack in a single font."
      }
    }
  ]
}
```