---
title: CFishPool
---

```csharp
public interface CFishPool : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CFishPool>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FishCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L17)

```csharp
ref int FishCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Fishes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L27)

```csharp
ref CUtlVector<CHandle<CFish>> Fishes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CFish](/docs/api/shared/schemadefinitions/cfish)>>

### IsDormant

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L25)

```csharp
ref bool IsDormant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxRange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L19)

```csharp
ref float MaxRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SwimDepth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L21)

```csharp
ref float SwimDepth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VisTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L29)

```csharp
CountdownTimer VisTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### WaterLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFishPool.cs#L23)

```csharp
ref float WaterLevel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

