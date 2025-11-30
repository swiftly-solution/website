---
title: PulseGraphExecutionHistoryEntry_t
---

# Interface PulseGraphExecutionHistoryEntry_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PulseGraphExecutionHistoryEntry_t : ISchemaClass<PulseGraphExecutionHistoryEntry_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PulseGraphExecutionHistoryEntry_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CursorID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L18)

```csharp
PulseCursorID_t CursorID { get; }
```

#### Property Value

- [PulseCursorID_t](/docs/api/schemadefinitions/pulsecursorid_t)

### EditorID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L20)

```csharp
PulseDocNodeID_t EditorID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### ExecTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L22)

```csharp
ref float ExecTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L24)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TagName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryEntry_t.cs#L27)

```csharp
SchemaUntypedField TagName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

