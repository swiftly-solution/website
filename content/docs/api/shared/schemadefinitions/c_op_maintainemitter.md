---
title: C_OP_MaintainEmitter
---

```csharp
public interface C_OP_MaintainEmitter : CParticleFunctionEmitter, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionEmitter>, ISchemaClass<C_OP_MaintainEmitter>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EmissionDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L20)

```csharp
CParticleCollectionFloatInput EmissionDuration { get; }
```

- Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **EmissionRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L22)

```csharp
ref float EmissionRate { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EmitInstantaneously** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L28)

```csharp
ref bool EmitInstantaneously { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FinalEmitOnStop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L30)

```csharp
ref bool FinalEmitOnStop { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ParticlesToMaintain** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L16)

```csharp
CParticleCollectionFloatInput ParticlesToMaintain { get; }
```

- Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L32)

```csharp
CParticleCollectionFloatInput Scale { get; }
```

- Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **SnapshotControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L24)

```csharp
ref int SnapshotControlPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L18)

```csharp
ref float StartTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StrSnapshotSubset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MaintainEmitter.cs#L26)

```csharp
string StrSnapshotSubset { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

