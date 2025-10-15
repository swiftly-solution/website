---
title: CPlayer_ObserverServices
---

```csharp
public interface CPlayer_ObserverServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_ObserverServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ForcedObserverMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ObserverServices.cs#L23)

```csharp
ref bool ForcedObserverMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ObserverLastMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ObserverServices.cs#L21)

```csharp
ref ObserverMode_t ObserverLastMode { get; }
```

#### Property Value

- [ObserverMode_t](/docs/api/shared/schemadefinitions/observermode_t)

### ObserverMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ObserverServices.cs#L17)

```csharp
ref byte ObserverMode { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ObserverTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ObserverServices.cs#L19)

```csharp
ref CHandle<CBaseEntity> ObserverTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

## Methods

### ObserverModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ObserverServices.cs#L25)

```csharp
void ObserverModeUpdated()
```

### ObserverTargetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ObserverServices.cs#L26)

```csharp
void ObserverTargetUpdated()
```

