---
title: CDemoStringTables_table_t
---

# Interface CDemoStringTables_table_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDemoStringTables_table_t : ITypedProtobuf<CDemoStringTables_table_t>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CDemoStringTables_table_t>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Items

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CDemoStringTables_items_t> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CDemoStringTables_items_t](/docs/api/protobufdefinitions/cdemostringtables_items_t)>

### ItemsClientside

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CDemoStringTables_items_t> ItemsClientside { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CDemoStringTables_items_t](/docs/api/protobufdefinitions/cdemostringtables_items_t)>

### TableFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L22)

```csharp
int TableFlags { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TableName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L13)

```csharp
string TableName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

