---
title: C_OP_RenderAsModels
---

```csharp
public interface C_OP_RenderAsModels : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderAsModels>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**FitToModelSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L21)

```csharp
ref bool FitToModelSize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ModelList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L17)

```csharp
ref CUtlVector ModelList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**ModelScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L19)

```csharp
ref float ModelScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NonUniformScaling** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L23)

```csharp
ref bool NonUniformScaling { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SizeCullBloat** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L31)

```csharp
ref int SizeCullBloat { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**XAxisScalingAttribute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L25)

```csharp
ParticleAttributeIndex_t XAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**YAxisScalingAttribute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L27)

```csharp
ParticleAttributeIndex_t YAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**ZAxisScalingAttribute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L29)

```csharp
ParticleAttributeIndex_t ZAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

