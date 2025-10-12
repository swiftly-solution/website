---
title: CQuest_PublisherAddCommunityItemsToPlayer_Request
---

```csharp
public interface CQuest_PublisherAddCommunityItemsToPlayer_Request : ITypedProtobuf<CQuest_PublisherAddCommunityItemsToPlayer_Request>, INativeHandle
```

- Implements

## Properties

### **Appid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L16)

```csharp
uint Appid { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Attributes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CQuest_PublisherAddCommunityItemsToPlayer_Request_Attribute> Attributes { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CQuest_PublisherAddCommunityItemsToPlayer_Request_Attribute](/docs/api/shared/protobufdefinitions/cquest_publisheraddcommunityitemstoplayer_request_attribute)>

### **MatchItemClass** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L22)

```csharp
uint MatchItemClass { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **MatchItemType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L19)

```csharp
uint MatchItemType { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Note** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L31)

```csharp
string Note { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **PrefixItemName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L25)

```csharp
string PrefixItemName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Steamid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L13)

```csharp
ulong Steamid { get; set; }
```

- Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

