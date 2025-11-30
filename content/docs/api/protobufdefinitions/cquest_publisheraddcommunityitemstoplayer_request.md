---
title: CQuest_PublisherAddCommunityItemsToPlayer_Request
---

# Interface CQuest_PublisherAddCommunityItemsToPlayer_Request

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CQuest_PublisherAddCommunityItemsToPlayer_Request : ITypedProtobuf<CQuest_PublisherAddCommunityItemsToPlayer_Request>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CQuest_PublisherAddCommunityItemsToPlayer_Request>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Appid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L16)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Attributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CQuest_PublisherAddCommunityItemsToPlayer_Request_Attribute> Attributes { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CQuest_PublisherAddCommunityItemsToPlayer_Request_Attribute](/docs/api/protobufdefinitions/cquest_publisheraddcommunityitemstoplayer_request_attribute)>

### MatchItemClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L22)

```csharp
uint MatchItemClass { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MatchItemType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L19)

```csharp
uint MatchItemType { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Note

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L31)

```csharp
string Note { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PrefixItemName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L25)

```csharp
string PrefixItemName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Steamid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CQuest_PublisherAddCommunityItemsToPlayer_Request.cs#L13)

```csharp
ulong Steamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

