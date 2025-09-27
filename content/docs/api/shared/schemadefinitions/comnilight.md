---
title: COmniLight
---

```csharp
public interface COmniLight : CBarnLight, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBarnLight>, ISchemaClass<COmniLight>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**InnerAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COmniLight.cs#L16)

```csharp
ref float InnerAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**OuterAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COmniLight.cs#L18)

```csharp
ref float OuterAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ShowLight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COmniLight.cs#L20)

```csharp
ref bool ShowLight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**InnerAngleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COmniLight.cs#L22)

```csharp
void InnerAngleUpdated()
```

**OuterAngleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COmniLight.cs#L23)

```csharp
void OuterAngleUpdated()
```

**ShowLightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COmniLight.cs#L24)

```csharp
void ShowLightUpdated()
```

