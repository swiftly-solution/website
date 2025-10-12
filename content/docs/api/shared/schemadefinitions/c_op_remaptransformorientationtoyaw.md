---
title: C_OP_RemapTransformOrientationToYaw
---

```csharp
public interface C_OP_RemapTransformOrientationToYaw : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapTransformOrientationToYaw>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToYaw.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **RotOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToYaw.cs#L20)

```csharp
ref float RotOffset { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SpinStrength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToYaw.cs#L22)

```csharp
ref float SpinStrength { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TransformInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapTransformOrientationToYaw.cs#L16)

```csharp
CParticleTransformInput TransformInput { get; }
```

- Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

