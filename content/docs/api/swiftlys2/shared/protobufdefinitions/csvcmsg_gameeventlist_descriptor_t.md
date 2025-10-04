---
title: CSVCMsg_GameEventList_descriptor_t
---

```csharp
public interface CSVCMsg_GameEventList_descriptor_t : ITypedProtobuf<CSVCMsg_GameEventList_descriptor_t>, INativeHandle
```

#### Implements

## Properties

**Eventid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L13)

```csharp
int Eventid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Keys** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_GameEventList_key_t> Keys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSVCMsg_GameEventList_key_t](/docs/api/shared/protobufdefinitions/csvcmsg_gameeventlist_key_t)>

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GameEventList_descriptor_t.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

