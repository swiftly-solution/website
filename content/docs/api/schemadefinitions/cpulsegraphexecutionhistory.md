---
title: CPulseGraphExecutionHistory
---

# Interface CPulseGraphExecutionHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseGraphExecutionHistory : ISchemaClass<CPulseGraphExecutionHistory>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulseGraphExecutionHistory>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### History

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L22)

```csharp
ref CUtlVector<PointerTo<PulseGraphExecutionHistoryEntry_t>> History { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[PulseGraphExecutionHistoryEntry_t](/docs/api/schemadefinitions/pulsegraphexecutionhistoryentry_t)>>

### InstanceID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L18)

```csharp
PulseGraphInstanceID_t InstanceID { get; }
```

#### Property Value

- [PulseGraphInstanceID_t](/docs/api/schemadefinitions/pulsegraphinstanceid_t)

### MapCellDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L25)

```csharp
SchemaUntypedField MapCellDesc { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MapCursorDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L28)

```csharp
SchemaUntypedField MapCursorDesc { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### StrFileName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L20)

```csharp
string StrFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

