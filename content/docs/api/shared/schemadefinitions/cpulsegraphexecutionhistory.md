---
title: CPulseGraphExecutionHistory
---

```csharp
public interface CPulseGraphExecutionHistory : ISchemaClass<CPulseGraphExecutionHistory>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### History

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L20)

```csharp
ref CUtlVector<PointerTo<PulseGraphExecutionHistoryEntry_t>> History { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[PulseGraphExecutionHistoryEntry_t](/docs/api/shared/schemadefinitions/pulsegraphexecutionhistoryentry_t)>>

### InstanceID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L16)

```csharp
PulseGraphInstanceID_t InstanceID { get; }
```

#### Property Value

- [PulseGraphInstanceID_t](/docs/api/shared/schemadefinitions/pulsegraphinstanceid_t)

### MapCellDesc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L23)

```csharp
SchemaUntypedField MapCellDesc { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### MapCursorDesc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L26)

```csharp
SchemaUntypedField MapCursorDesc { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### StrFileName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphExecutionHistory.cs#L18)

```csharp
string StrFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

