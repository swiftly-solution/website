---
title: C_OP_ModelDampenMovement
---

```csharp
public interface C_OP_ModelDampenMovement : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_ModelDampenMovement>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BoundBox** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L18)

```csharp
ref bool BoundBox { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L16)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Drag** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L28)

```csharp
ref float Drag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **HitboxSetName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L24)

```csharp
string HitboxSetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Outside** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L20)

```csharp
ref bool Outside { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PosOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L26)

```csharp
CPerParticleVecInput PosOffset { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **UseBones** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ModelDampenMovement.cs#L22)

```csharp
ref bool UseBones { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

