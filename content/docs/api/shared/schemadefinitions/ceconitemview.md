---
title: CEconItemView
---

```csharp
public interface CEconItemView : IEconItemInterface, ISchemaClass<IEconItemInterface>, ISchemaClass<CEconItemView>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccountID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L29)

```csharp
ref uint AccountID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AttributeList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L35)

```csharp
CAttributeList AttributeList { get; }
```

#### Property Value

- [CAttributeList](/docs/api/shared/schemadefinitions/cattributelist)

### CustomName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L39)

```csharp
string CustomName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CustomNameOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L41)

```csharp
string CustomNameOverride { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntityLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L21)

```csharp
ref uint EntityLevel { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EntityQuality

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L19)

```csharp
ref int EntityQuality { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Initialized

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L33)

```csharp
ref bool Initialized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InventoryPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L31)

```csharp
ref uint InventoryPosition { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ItemDefinitionIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L17)

```csharp
ref ushort ItemDefinitionIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ItemID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L23)

```csharp
ref ulong ItemID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### ItemIDHigh

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L25)

```csharp
ref uint ItemIDHigh { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ItemIDLow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L27)

```csharp
ref uint ItemIDLow { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NetworkedDynamicAttributes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L37)

```csharp
CAttributeList NetworkedDynamicAttributes { get; }
```

#### Property Value

- [CAttributeList](/docs/api/shared/schemadefinitions/cattributelist)

## Methods

### AccountIDUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L48)

```csharp
void AccountIDUpdated()
```

### AttributeListUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L51)

```csharp
void AttributeListUpdated()
```

### CustomNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L53)

```csharp
void CustomNameUpdated()
```

### EntityLevelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L45)

```csharp
void EntityLevelUpdated()
```

### EntityQualityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L44)

```csharp
void EntityQualityUpdated()
```

### InitializedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L50)

```csharp
void InitializedUpdated()
```

### InventoryPositionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L49)

```csharp
void InventoryPositionUpdated()
```

### ItemDefinitionIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L43)

```csharp
void ItemDefinitionIndexUpdated()
```

### ItemIDHighUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L46)

```csharp
void ItemIDHighUpdated()
```

### ItemIDLowUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L47)

```csharp
void ItemIDLowUpdated()
```

### NetworkedDynamicAttributesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L52)

```csharp
void NetworkedDynamicAttributesUpdated()
```

