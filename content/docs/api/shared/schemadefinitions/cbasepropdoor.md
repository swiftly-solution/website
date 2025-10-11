---
title: CBasePropDoor
---

```csharp
public interface CBasePropDoor : CDynamicProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CDynamicProp>, ISchemaClass<CBasePropDoor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Activator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L44)

```csharp
ref CHandle<CBaseEntity> Activator { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **AutoReturnDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L16)

```csharp
ref float AutoReturnDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Blocker** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L34)

```csharp
ref CHandle<CBaseEntity> Blocker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **ClosedAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L32)

```csharp
ref QAngle ClosedAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **ClosedPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L30)

```csharp
ref Vector ClosedPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **DoorList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L18)

```csharp
ref CUtlVector<CHandle<CBasePropDoor>> DoorList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePropDoor](/docs/api/shared/schemadefinitions/cbasepropdoor)>>

### **DoorState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L24)

```csharp
ref DoorState_t DoorState { get; }
```

#### Property Value

- [DoorState_t](/docs/api/shared/schemadefinitions/doorstate_t)

### **FirstBlocked** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L36)

```csharp
ref bool FirstBlocked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ForceClosed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L40)

```csharp
ref bool ForceClosed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HardwareType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L20)

```csharp
ref int HardwareType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **LatchWorldPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L42)

```csharp
ref Vector LatchWorldPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Locked** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L26)

```csharp
ref bool Locked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Ls** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L38)

```csharp
locksound_t Ls { get; }
```

#### Property Value

- [locksound_t](/docs/api/shared/schemadefinitions/locksound_t)

### **Master** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L70)

```csharp
ref CHandle<CBasePropDoor> Master { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePropDoor](/docs/api/shared/schemadefinitions/cbasepropdoor)>

### **NeedsHardware** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L22)

```csharp
ref bool NeedsHardware { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NoNPCs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L28)

```csharp
ref bool NoNPCs { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NumCloseAttempts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L64)

```csharp
ref int NumCloseAttempts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OnAjarOpen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L90)

```csharp
CEntityIOOutput OnAjarOpen { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnBlockedClosing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L72)

```csharp
CEntityIOOutput OnBlockedClosing { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnBlockedOpening** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L74)

```csharp
CEntityIOOutput OnBlockedOpening { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnClose** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L84)

```csharp
CEntityIOOutput OnClose { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnFullyClosed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L80)

```csharp
CEntityIOOutput OnFullyClosed { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnFullyOpen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L82)

```csharp
CEntityIOOutput OnFullyOpen { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnLockedUse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L88)

```csharp
CEntityIOOutput OnLockedUse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnOpen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L86)

```csharp
CEntityIOOutput OnOpen { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnUnblockedClosing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L76)

```csharp
CEntityIOOutput OnUnblockedClosing { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnUnblockedOpening** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L78)

```csharp
CEntityIOOutput OnUnblockedOpening { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **PhysicsMaterial** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L66)

```csharp
ref CUtlStringToken PhysicsMaterial { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### **SlaveName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L68)

```csharp
string SlaveName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundClose** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L50)

```csharp
string SoundClose { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundJiggle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L60)

```csharp
string SoundJiggle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundLatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L56)

```csharp
string SoundLatch { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundLock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L52)

```csharp
string SoundLock { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundLockedAnim** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L62)

```csharp
string SoundLockedAnim { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundMoving** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L46)

```csharp
string SoundMoving { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundOpen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L48)

```csharp
string SoundOpen { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundPound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L58)

```csharp
string SoundPound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundUnlock** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L54)

```csharp
string SoundUnlock { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### **ClosedAnglesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L96)

```csharp
void ClosedAnglesUpdated()
```

### **ClosedPositionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L95)

```csharp
void ClosedPositionUpdated()
```

### **DoorStateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L92)

```csharp
void DoorStateUpdated()
```

### **LockedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L93)

```csharp
void LockedUpdated()
```

### **MasterUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L97)

```csharp
void MasterUpdated()
```

### **NoNPCsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePropDoor.cs#L94)

```csharp
void NoNPCsUpdated()
```

