---
title: CSVCMsg_GameEventList_descriptor_t
---

# Interface CSVCMsg_GameEventList_descriptor_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_GameEventList_descriptor_t : ITypedProtobuf<CSVCMsg_GameEventList_descriptor_t>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSVCMsg_GameEventList_descriptor_t>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Eventid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L13)

```csharp
int Eventid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Keys

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_GameEventList_key_t> Keys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSVCMsg_GameEventList_key_t](/docs/api/protobufdefinitions/csvcmsg_gameeventlist_key_t)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

