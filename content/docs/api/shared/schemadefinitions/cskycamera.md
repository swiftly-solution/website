---
title: CSkyCamera
---

```csharp
public interface CSkyCamera : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSkyCamera>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Next** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyCamera.cs#L22)

```csharp
CSkyCamera? Next { get; }
```

#### Property Value

- [CSkyCamera](/docs/api/shared/schemadefinitions/cskycamera)?

### **SkyboxData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyCamera.cs#L16)

```csharp
sky3dparams_t SkyboxData { get; }
```

#### Property Value

- [sky3dparams_t](/docs/api/shared/schemadefinitions/sky3dparams_t)

### **SkyboxSlotToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyCamera.cs#L18)

```csharp
ref CUtlStringToken SkyboxSlotToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### **UseAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyCamera.cs#L20)

```csharp
ref bool UseAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **SkyboxDataUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyCamera.cs#L24)

```csharp
void SkyboxDataUpdated()
```

### **SkyboxSlotTokenUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyCamera.cs#L25)

```csharp
void SkyboxSlotTokenUpdated()
```

