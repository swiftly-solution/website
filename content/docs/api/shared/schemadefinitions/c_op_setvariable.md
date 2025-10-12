---
title: C_OP_SetVariable
---

```csharp
public interface C_OP_SetVariable : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_SetVariable>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **FloatInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVariable.cs#L26)

```csharp
CParticleCollectionFloatInput FloatInput { get; }
```

- Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **Input** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVariable.cs#L24)

```csharp
CParticleCollectionVecInput Input { get; }
```

- Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### **PositionOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVariable.cs#L20)

```csharp
ref Vector PositionOffset { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **RotationOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVariable.cs#L22)

```csharp
ref QAngle RotationOffset { get; }
```

- Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **TransformInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVariable.cs#L18)

```csharp
CParticleTransformInput TransformInput { get; }
```

- Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

### **VariableReference** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVariable.cs#L16)

```csharp
CParticleVariableRef VariableReference { get; }
```

- Property Value

- [CParticleVariableRef](/docs/api/shared/schemadefinitions/cparticlevariableref)

