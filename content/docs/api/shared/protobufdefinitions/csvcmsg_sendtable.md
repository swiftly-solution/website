---
title: CSVCMsg_SendTable
---

```csharp
public interface CSVCMsg_SendTable : ITypedProtobuf<CSVCMsg_SendTable>, INativeHandle
```

#### Implements

## Properties

**IsEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L13)

```csharp
bool IsEnd { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NeedsDecoder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L19)

```csharp
bool NeedsDecoder { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NetTableName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L16)

```csharp
string NetTableName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Props** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_SendTable_sendprop_t> Props { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSVCMsg_SendTable_sendprop_t](/docs/api/shared/protobufdefinitions/csvcmsg_sendtable_sendprop_t)>

