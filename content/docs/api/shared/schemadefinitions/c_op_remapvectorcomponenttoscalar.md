---
title: C_OP_RemapVectorComponentToScalar
---

```csharp
public interface C_OP_RemapVectorComponentToScalar : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapVectorComponentToScalar>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Component** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapVectorComponentToScalar.cs#L20)

```csharp
ref int Component { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **FieldInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapVectorComponentToScalar.cs#L16)

```csharp
ParticleAttributeIndex_t FieldInput { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapVectorComponentToScalar.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

