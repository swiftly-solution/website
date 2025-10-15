---
title: CPhysFixed
---

```csharp
public interface CPhysFixed : CPhysConstraint, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysConstraint>, ISchemaClass<CPhysFixed>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AngularDampingRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L23)

```csharp
ref float AngularDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngularFrequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L21)

```csharp
ref float AngularFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BoneName1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L29)

```csharp
string BoneName1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneName2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L31)

```csharp
string BoneName2 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EnableAngularConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L27)

```csharp
ref bool EnableAngularConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLinearConstraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L25)

```csharp
ref bool EnableLinearConstraint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinearDampingRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L19)

```csharp
ref float LinearDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearFrequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysFixed.cs#L17)

```csharp
ref float LinearFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

