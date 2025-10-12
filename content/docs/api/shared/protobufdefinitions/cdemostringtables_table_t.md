---
title: CDemoStringTables_table_t
---

```csharp
public interface CDemoStringTables_table_t : ITypedProtobuf<CDemoStringTables_table_t>, INativeHandle
```

#### Implements

## Properties

### Items

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CDemoStringTables_items_t> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDemoStringTables_items_t](/docs/api/shared/protobufdefinitions/cdemostringtables_items_t)>

### ItemsClientside

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CDemoStringTables_items_t> ItemsClientside { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDemoStringTables_items_t](/docs/api/shared/protobufdefinitions/cdemostringtables_items_t)>

### TableFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L22)

```csharp
int TableFlags { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TableName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDemoStringTables_table_t.cs#L13)

```csharp
string TableName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

