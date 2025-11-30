---
title: CSVCMsg_SendTable
---

# Interface CSVCMsg_SendTable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_SendTable : ITypedProtobuf<CSVCMsg_SendTable>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSVCMsg_SendTable>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### IsEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L13)

```csharp
bool IsEnd { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NeedsDecoder

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L19)

```csharp
bool NeedsDecoder { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetTableName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L16)

```csharp
string NetTableName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Props

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_SendTable.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_SendTable_sendprop_t> Props { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSVCMsg_SendTable_sendprop_t](/docs/api/protobufdefinitions/csvcmsg_sendtable_sendprop_t)>

