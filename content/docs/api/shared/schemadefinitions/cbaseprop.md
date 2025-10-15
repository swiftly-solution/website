---
title: CBaseProp
---

```csharp
public interface CBaseProp : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ConformToCollisionBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseProp.cs#L21)

```csharp
ref bool ConformToCollisionBounds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MPreferredCatchTransform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseProp.cs#L23)

```csharp
ref CTransform MPreferredCatchTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### ModelOverrodeBlockLOS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseProp.cs#L17)

```csharp
ref bool ModelOverrodeBlockLOS { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShapeType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseProp.cs#L19)

```csharp
ref int ShapeType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

