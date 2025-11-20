---
title: PulseGraphExecutionHistoryEntry_t
---

```csharp
public interface PulseGraphExecutionHistoryEntry_t : ISchemaClass<PulseGraphExecutionHistoryEntry_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CursorID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L18)

```csharp
PulseCursorID_t CursorID { get; }
```

#### Property Value

- [PulseCursorID_t](/docs/api/shared/schemadefinitions/pulsecursorid_t)

### EditorID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L20)

```csharp
PulseDocNodeID_t EditorID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### ExecTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L22)

```csharp
ref float ExecTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L24)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TagName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L27)

```csharp
SchemaUntypedField TagName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

