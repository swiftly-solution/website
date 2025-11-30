---
title: CUserMessage_Inventory_Response
---

# Interface CUserMessage_Inventory_Response

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessage_Inventory_Response : ITypedProtobuf<CUserMessage_Inventory_Response>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CUserMessage_Inventory_Response>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BuildVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L43)

```csharp
int BuildVersion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ClientTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L25)

```csharp
int ClientTimestamp { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Crc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L13)

```csharp
uint Crc { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Instance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L46)

```csharp
int Instance { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InvType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L40)

```csharp
int InvType { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Inventories

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_Inventory_Response_InventoryDetail> Inventories { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CUserMessage_Inventory_Response_InventoryDetail](/docs/api/protobufdefinitions/cusermessage_inventory_response_inventorydetail)>

### Inventories2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L34)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_Inventory_Response_InventoryDetail> Inventories2 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CUserMessage_Inventory_Response_InventoryDetail](/docs/api/protobufdefinitions/cusermessage_inventory_response_inventorydetail)>

### Inventories3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L37)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_Inventory_Response_InventoryDetail> Inventories3 { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CUserMessage_Inventory_Response_InventoryDetail](/docs/api/protobufdefinitions/cusermessage_inventory_response_inventorydetail)>

### ItemCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L16)

```csharp
int ItemCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Osversion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L19)

```csharp
int Osversion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PerfTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L22)

```csharp
int PerfTime { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Platform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L28)

```csharp
int Platform { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Inventory_Response.cs#L49)

```csharp
long StartTime { get; set; }
```

#### Property Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

