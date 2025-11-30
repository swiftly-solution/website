---
title: CPulse_Chunk
---

# Interface CPulse_Chunk

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_Chunk : ISchemaClass<CPulse_Chunk>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_Chunk>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### InstructionEditorIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L22)

```csharp
ref CUtlLeanVector<PulseDocNodeID_t, int> InstructionEditorIDs { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Instructions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L18)

```csharp
ref CUtlLeanVector<PGDInstruction_t, int> Instructions { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[PGDInstruction_t](/docs/api/schemadefinitions/pgdinstruction_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Registers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L20)

```csharp
ref CUtlLeanVector<CPulse_RegisterInfo, int> Registers { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CPulse_RegisterInfo](/docs/api/schemadefinitions/cpulse_registerinfo), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

