---
title: CPAssignment_t
---

```csharp
public interface CPAssignment_t : ISchemaClass<CPAssignment_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **CPNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L16)

```csharp
ref int CPNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OrientationMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L20)

```csharp
ref ParticleOrientationSetMode_t OrientationMode { get; }
```

- Property Value

- [ParticleOrientationSetMode_t](/docs/api/shared/schemadefinitions/particleorientationsetmode_t)

### **Pos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L18)

```csharp
CPerParticleVecInput Pos { get; }
```

- Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

