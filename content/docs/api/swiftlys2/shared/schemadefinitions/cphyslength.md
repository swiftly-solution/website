---
title: CPhysLength
---

```csharp
public interface CPhysLength : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CPhysLength>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AddLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysLength.cs#L20)

```csharp
ref float AddLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Attach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysLength.cs#L18)

```csharp
ref Vector Attach { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**EnableCollision** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysLength.cs#L26)

```csharp
ref bool EnableCollision { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MinLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysLength.cs#L22)

```csharp
ref float MinLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysLength.cs#L16)

```csharp
ISchemaFixedArray<Vector> Offset { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

**TotalLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysLength.cs#L24)

```csharp
ref float TotalLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

