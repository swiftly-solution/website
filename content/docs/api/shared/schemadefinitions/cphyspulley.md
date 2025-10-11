---
title: CPhysPulley
---

```csharp
public interface CPhysPulley : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CPhysPulley>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AddLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysPulley.cs#L20)

```csharp
ref float AddLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GearRatio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysPulley.cs#L22)

```csharp
ref float GearRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysPulley.cs#L18)

```csharp
ISchemaFixedArray<Vector> Offset { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

### **Position2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysPulley.cs#L16)

```csharp
ref Vector Position2 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

