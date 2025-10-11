---
title: C_INIT_RemapInitialDirectionToTransformToVector
---

```csharp
public interface C_INIT_RemapInitialDirectionToTransformToVector : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_RemapInitialDirectionToTransformToVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialDirectionToTransformToVector.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **Normalize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialDirectionToTransformToVector.cs#L26)

```csharp
ref bool Normalize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OffsetAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialDirectionToTransformToVector.cs#L24)

```csharp
ref Vector OffsetAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **OffsetRot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialDirectionToTransformToVector.cs#L22)

```csharp
ref float OffsetRot { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialDirectionToTransformToVector.cs#L20)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TransformInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_RemapInitialDirectionToTransformToVector.cs#L16)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

