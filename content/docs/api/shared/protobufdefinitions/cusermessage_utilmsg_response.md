---
title: CUserMessage_UtilMsg_Response
---

```csharp
public interface CUserMessage_UtilMsg_Response : ITypedProtobuf<CUserMessage_UtilMsg_Response>, INativeHandle
```

#### Implements

## Properties

**ClientTimestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L31)

```csharp
int ClientTimestamp { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Crc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L13)

```csharp
uint Crc { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Crc2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L19)

```csharp
uint Crc2 { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**CrcPart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L25)

```csharp
IProtobufRepeatedFieldValueType<int> CrcPart { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**CrcPart2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L28)

```csharp
IProtobufRepeatedFieldValueType<int> CrcPart2 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**ItemCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L16)

```csharp
int ItemCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ItemCount2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L22)

```csharp
int ItemCount2 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Itemdetails** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L37)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_UtilMsg_Response_ItemDetail> Itemdetails { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CUserMessage_UtilMsg_Response_ItemDetail](/docs/api/shared/protobufdefinitions/cusermessage_utilmsg_response_itemdetail)>

**Itemgroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L40)

```csharp
int Itemgroup { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Platform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L34)

```csharp
int Platform { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TotalCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L43)

```csharp
int TotalCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TotalCount2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_UtilMsg_Response.cs#L46)

```csharp
int TotalCount2 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

