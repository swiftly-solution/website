---
title: CFuncLadder
---

```csharp
public interface CFuncLadder : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncLadder>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AutoRideSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L26)

```csharp
ref float AutoRideSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L28)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Dismounts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L18)

```csharp
ref CUtlVector<CHandle<CInfoLadderDismount>> Dismounts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CInfoLadderDismount](/docs/api/shared/schemadefinitions/cinfoladderdismount)>>

### **FakeLadder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L30)

```csharp
ref bool FakeLadder { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HasSlack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L32)

```csharp
ref bool HasSlack { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LadderDir** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L16)

```csharp
ref Vector LadderDir { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **LocalTop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L20)

```csharp
ref Vector LocalTop { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **OnPlayerGotOffLadder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L38)

```csharp
CEntityIOOutput OnPlayerGotOffLadder { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnPlayerGotOnLadder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L36)

```csharp
CEntityIOOutput OnPlayerGotOnLadder { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **PlayerMountPositionBottom** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L24)

```csharp
ref Vector PlayerMountPositionBottom { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **PlayerMountPositionTop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L22)

```csharp
ref Vector PlayerMountPositionTop { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **SurfacePropName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L34)

```csharp
string SurfacePropName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### **AutoRideSpeedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L43)

```csharp
void AutoRideSpeedUpdated()
```

### **FakeLadderUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L44)

```csharp
void FakeLadderUpdated()
```

### **LadderDirUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L40)

```csharp
void LadderDirUpdated()
```

### **PlayerMountPositionBottomUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L42)

```csharp
void PlayerMountPositionBottomUpdated()
```

### **PlayerMountPositionTopUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncLadder.cs#L41)

```csharp
void PlayerMountPositionTopUpdated()
```

