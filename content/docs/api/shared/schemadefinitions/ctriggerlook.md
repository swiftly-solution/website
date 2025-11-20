---
title: CTriggerLook
---

```csharp
public interface CTriggerLook : CTriggerOnce, CTriggerMultiple, CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerMultiple>, ISchemaClass<CTriggerOnce>, ISchemaClass<CTriggerLook>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### B2DFOV

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L34)

```csharp
ref bool B2DFOV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FieldOfView

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L20)

```csharp
ref float FieldOfView { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsLooking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L32)

```csharp
ref bool IsLooking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LookTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L18)

```csharp
ref CHandle<CBaseEntity> LookTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### LookTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L22)

```csharp
ref float LookTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookTimeLast

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L26)

```csharp
GameTime_t LookTimeLast { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LookTimeTotal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L24)

```csharp
ref float LookTimeTotal { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnEndLook

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L46)

```csharp
CEntityIOOutput OnEndLook { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStartLook

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L44)

```csharp
CEntityIOOutput OnStartLook { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnTimeout

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L42)

```csharp
CEntityIOOutput OnTimeout { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### TestAllVisibleOcclusion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L40)

```csharp
ref bool TestAllVisibleOcclusion { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TestOcclusion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L38)

```csharp
ref bool TestOcclusion { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimeoutDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L28)

```csharp
ref float TimeoutDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeoutFired

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L30)

```csharp
ref bool TimeoutFired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L36)

```csharp
ref bool UseVelocity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### TestAllVisibleOcclusionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L49)

```csharp
void TestAllVisibleOcclusionUpdated()
```

### TestOcclusionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLook.cs#L48)

```csharp
void TestOcclusionUpdated()
```

