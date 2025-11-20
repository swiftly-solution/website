---
title: CPulse_Chunk
---

```csharp
public interface CPulse_Chunk : ISchemaClass<CPulse_Chunk>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### InstructionEditorIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L22)

```csharp
ref CUtlLeanVector<PulseDocNodeID_t, int> InstructionEditorIDs { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Instructions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L18)

```csharp
ref CUtlLeanVector<PGDInstruction_t, int> Instructions { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[PGDInstruction_t](/docs/api/shared/schemadefinitions/pgdinstruction_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Registers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Chunk.cs#L20)

```csharp
ref CUtlLeanVector<CPulse_RegisterInfo, int> Registers { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CPulse_RegisterInfo](/docs/api/shared/schemadefinitions/cpulse_registerinfo), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

